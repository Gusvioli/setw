export default function Processador(entrada) {
    const [dataFetach] = entrada;
    
    const formatData = (title, q, p, save) => ({ title, q, p, save });
    const pBWidth = (valor) => (100 * valor) / dataFetach.length;

    const tags = (title, regex) => {
        const dataRegex = dataFetach.match(regex) === null ? 0 : dataFetach.match(regex)
            .filter((fil) => fil === '<' || fil === '>').length;

        if (dataRegex === null) return formatData(title, 0, 10, []);
        return formatData(
            title,
            `${Math.floor(dataRegex / 2)}`,
            dataRegex,
            dataRegex
        );
    };

    const palavras = (title) => {
        const dataRegex = dataFetach.replace(/\W/g, " ")
            .replace(/(\r\n|\n|\r)/gm, "").split(' ')
            .filter((fil) => fil.length !== 0);

        if (dataRegex === null) return formatData(title, 0, 10, []);
        return formatData(
            title,
            `${Math.floor(dataRegex.length)}`,
            pBWidth(dataRegex.length),
            dataRegex
        );
    };

    const realizar = (title, regex) => {
        const dataRegex = dataFetach.match(regex);

        if (dataRegex === null) return formatData(title, 0, 10, []);
        return formatData(
            title,
            `${Math.floor(dataRegex.length)}`,
            pBWidth(dataRegex.length),
            dataRegex,
        );
    };

    const caracteres = (title) => {
        const dataRegex = dataFetach.split('');
        return formatData(title, `${Math.floor(dataFetach.length)}`, 100, dataRegex);
    };

    return {
        outros: [
            realizar('Letras', /\w/g),
            realizar('Vogais', /[a|e|i|o|u|A|E|I|O|U]/g),
            realizar('Caracteres especiais', /\W/g),
            realizar('Espaços em branco', / /g),
            palavras('Palavras'),
            tags('<Tags>', /\W/g),
            caracteres('Caracteres'),
        ]
    }
}
