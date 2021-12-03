export interface apiResponse {
  title: string
  date: Date
}

export interface apiRequest {
  headers: {
    'X-MICROCMS-API-KEY': string
  }
}
