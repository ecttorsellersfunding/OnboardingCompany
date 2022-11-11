import { toApiResponse } from '@/mocks'

export const authMock = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.JTZWxsZXJzRnVuZGluZyI6IlNlbGxlcnNGdW5kaW5nVG9rZW4iLCJUZW5hbnRJZCI6IjllNTVhNzkzLTliYjEtNDkxZS1iZWQzLTY1MzEzZDY1ZTkzMiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJUZXN0QXV0b21hdGlvbiBXZWIiLCJ1bmlxdWVfbmFtZSI6ImRqdGVzdHNmKzk5OUBnbWFpbC5jb20iLCJlbWFpbCI6ImRqdGVzdHNmKzk5OUBnbWFpbC5jb20iLCJqdGkiOiIyMDc0NGM1OS02MmY3LTQxNmItODhmOS1kN2VlOTI0NjI2ZjEiLCJzdWIiOiI2YjI0NGE0MC0zZTM1LTQ1Y2ItOWI1Yy1kZWQwNjYyMjJlNDgiLCJuYmYiOiIxNjYzNTk3MTAxIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZWlkZW50aWZpZXIiOiI2YjI0NGE0MC0zZTM1LTQ1Y2ItOWI1Yy1kZWQwNjYyMjJlNDgiLCJpYXQiOjE2NjM1OTcxMDEsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IlNlbGxlciIsImV4cCI6MTY2MzYwNDMwMH0.6V-l7BrJ-lwoQ0IayGNJCQ_MnSuXUwFYan3-enAIMoI',
  expiration: '2022-09-19T16:18:20.6943127Z',
  user: {
    userId: '6b244a40-3e35-45cb-9b5c-ded066222e48',
    name: 'TestAutomation',
    lastName: 'Web',
    email: 'djtestsf+999@gmail.com',
    phoneNumber: '+1 (201) 555-5555',
    emailConfirmed: true,
    roles: [
      'Seller',
    ],
    claims: [],
  },
}

export const authResponseMock = toApiResponse(authMock)
