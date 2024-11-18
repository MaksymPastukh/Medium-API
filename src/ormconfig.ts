import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';


const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'medium',
  password: '123',
  database: 'mediumclone',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: [__dirname + '/migration/**/*{.ts,.js}'],


};

export default config

