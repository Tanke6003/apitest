import { Sequelize, QueryTypes } from 'sequelize';
import { envs } from './envs';

export class MariaDB{
  private static instance: MariaDB;
  private sequelize: Sequelize;

  private constructor() {
    this.sequelize = new Sequelize({
      dialect: 'mariadb',
      host: envs.MARIADB_HOST,
      username: envs.MARIADB_USERNAME,
      password: envs.MARIADB_PASSWORD,
      database: envs.MARIADB_DATABASE,
      port: envs.MARIADB_PORT,
    });
  }

  public static getInstance(): MariaDB {
    if (!MariaDB.instance) {
        MariaDB.instance = new MariaDB();
    }
    return MariaDB.instance;
  }

  public async executeQuery(query: string, ...parameters: any[]): Promise<any> {
    try {
      const result = await this.sequelize.query(query, {
        replacements: parameters,
        type: QueryTypes.SELECT,
      });
      return result;
    } catch (error) {
      throw new Error(`Error executing query: ${error}`);
    }
  }  
  public async executeProcedure(procName: string, ...parameters: any[]): Promise<any> {
    try {
      const query = `CALL ${procName}${parameters.length > 0 ? `(${parameters.map(() => '?').join(', ')})` : ''}`;
      const result = await this.sequelize.query(query, {
        replacements: parameters,
        type: QueryTypes.RAW,
      });
      return result;
    } catch (error) {
      throw new Error(`Error executing procedure: ${error}`);
    }
  }

  public async executeInsert(query: string, replacements?: any[]): Promise<number> {
    try {
      const [result] = await this.sequelize.query(query, {
        replacements,
        type: QueryTypes.INSERT,
      });
      return result;
    } catch (error) {
      throw new Error(`Error executing insert query: ${error}`);
    }
  }


  public async closeConnection(): Promise<void> {
    await this.sequelize.close();
  }
}

