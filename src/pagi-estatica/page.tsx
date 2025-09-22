export default async function EstaticaPage({
    params,
}: {
    params: {slug: string}
}) {
    const {slug} = params
    return (
        <h1>Página estática dentro da rota dinâmica {slug}</h1>
    )
}
