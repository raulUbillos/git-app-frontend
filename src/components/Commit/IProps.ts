
export default interface IProps {
    code: string;
    dateAuthored: string;
    dateCommited: string;
    author: {
      name: string;
      email: string;
      avatarUrl?: string;
    };
    committer: {
      name: string;
      email: string;
      avatarUrl?: string;
    };
    message: string;
    repository: string;
    owner: string;
}