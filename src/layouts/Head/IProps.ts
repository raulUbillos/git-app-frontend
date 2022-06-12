export default interface IProps {
    repositories: {
        name:string,
        action: () => void,
        current: () => boolean
    }[];
}