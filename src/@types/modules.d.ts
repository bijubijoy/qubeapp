declare module "react-loading-overlay" {
    type Overlay = {
        active: boolean,
        spinner: boolean,
        text: string;
    }
    export default function LoadingOverlay(props: Overlay): React.ReactElement;

}
