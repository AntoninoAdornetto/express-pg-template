import pool from '../src/loaders/postgres';

describe('Postgres database connection and temp table creation', () => {
  beforeEach(async () => {
    await pool.query('CREATE TEMP TABLE note(name VARCHAR(255))');
  });

  afterEach(async () => {
    await pool.query('DROP TABLE IF EXISTS note');
  });

  afterAll(async () => {
    await pool.end();
  });

  test('Connect and inset data into the temp table', async () => {
    const query = { name: 'test-note' };

    await pool.query('INSERT INTO note (name) VALUES ($1)', [query.name]);
    const { rows } = await pool.query('SELECT name FROM note WHERE name = $1', [query.name]);
    expect(rows[0]).toStrictEqual(query);
  });
});
