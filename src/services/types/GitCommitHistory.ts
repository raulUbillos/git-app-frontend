export default interface GitCommitHistory {
  code: string;
  dateAuthored: string;
  dateCommited: string;
  author: {
    avatarUrl?: string;
    name: string;
    email: string;
  };
  committer: {
    avatarUrl?: string;
    name: string;
    email: string;
  };
  message: string;
}
