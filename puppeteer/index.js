import express from "express"
import puppeteer from "puppeteer"


const app = express();
const PORT = 3000;

app.get('/github-user/:username', async (req, res) => {
  const { username } = req.params;

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  const url = `https://github.com/${username}`;

  try {
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    const userData = await page.evaluate(() => {
      const getText = (selector) =>
        document.querySelector(selector)?.innerText?.trim() || null;

      const name = getText('span.p-name');
      const username = getText('span.p-nickname');
      const bio = getText('div.p-note');

      const repos = getText('a[href$="?tab=repositories"] span.Counter') || '0';
      const followers = getText('a[href$="?tab=followers"] span.Counter') || '0';
      const following = getText('a[href$="?tab=following"] span.Counter') || '0';

      return {
        name,
        username,
        bio,
        repositories: parseInt(repos.replace(',', '')) || 0,
        followers: parseInt(followers.replace(',', '')) || 0,
        following: parseInt(following.replace(',', '')) || 0,
      };
    });

    // Go to Repositories tab
    await page.goto(`${url}?tab=repositories`, { waitUntil: 'domcontentloaded' });

    const topRepos = await page.evaluate(() => {
      const repos = Array.from(document.querySelectorAll('li[itemprop="owns"]'));
      const repoData = repos.map(repo => {
        const name = repo.querySelector('a[itemprop="name codeRepository"]')?.innerText?.trim();
        const starsText = repo.querySelector('a[href$="/stargazers"]')?.innerText?.trim() || '0';
        const stars = parseInt(starsText.replace(',', '').replace('k', '000')) || 0;
        return { name, stars };
      });

      repoData.sort((a, b) => b.stars - a.stars);
      return repoData.slice(0, 3);
    });

    await browser.close();

    res.json({
      ...userData,
      top_repositories: topRepos
    });

  } catch (error) {
    await browser.close();
    res.status(500).json({ error: 'Failed to fetch user data', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
