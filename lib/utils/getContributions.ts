import { client } from "@lib/utils/graphQlClient";

async function getTotalYears(username: string) {
  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection {
          contributionYears
        }
      }
    }
  `;

  const data = await client.request(query);
  return data.user.contributionsCollection.contributionYears;
}

async function getTotalContributionsForYear(username: string, year: string) {
  const from = `${year}-01-01T00:00:00Z`;
  const to = `${year}-12-31T23:59:59Z`;

  const query = `
    query {
      user(login: "${username}") {
        contributionsCollection(from: "${from}", to: "${to}") {
          contributionCalendar {
            totalContributions
          }
        }
      }
    }
  `;

  const data = await client.request(query);
  return data.user.contributionsCollection.contributionCalendar.totalContributions;
}

export async function getTotalContributionsForYears(username: string) {
  const results = [];
  const years = await getTotalYears(username).then((years) => years.sort());
  const startYear = years[0];
  const endYear = years[years.length - 1];
  for (let year = startYear; year <= endYear; year++) {
    const totalContributions = await getTotalContributionsForYear(username, year);
    results.push({ year, totalContributions });
  }
  return results;
}
