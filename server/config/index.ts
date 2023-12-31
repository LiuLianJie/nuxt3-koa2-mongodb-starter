
export interface Config {
  host: string,
  port: number,
  basePath: string,
  session:{
    secretKey: string
  }
}

const config: Config = {
  host:"0.0.0.0",
  port: (Number(process.env.KOA_PORT) || 3001),
  basePath: '',
  session:{
    secretKey: 'SAVOY'
  }
}

export { config }