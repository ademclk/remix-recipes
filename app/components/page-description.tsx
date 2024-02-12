import { Header } from "./header"

type PageDescriptionProps = {
    header: string,
    message: string
}

export function PageDescription({ header, message }: PageDescriptionProps) {
    return (
        <div>
            <Header>{header}</Header>
            <p className="text-3xl">{message}</p>
        </div>
    )
}