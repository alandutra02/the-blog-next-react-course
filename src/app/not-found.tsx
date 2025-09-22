import { ErrorMessage } from "@/components/ErrorMessage";

export default function NotFoundPage() {
    return (
        <ErrorMessage
            titleError="página não encontrada"
            codeError="404"
        >
            Erro 404 - A página que você está tentando acessar não existe neste site.
        </ErrorMessage>
    )
}
