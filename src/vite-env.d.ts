/// <reference types="vite/client" />

interface Project {
  name: string,
  description: string,
  url: string,
  vcs: string,
  tags: string[],
  wip: boolean,
}
