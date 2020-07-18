import React, {useEffect, useState} from "react";
import Moment from 'react-moment';

function isMarkDownFileObject(fo) {
    return fo.language && fo.language === 'Markdown';
}

function filterMarkdownGists(gists) {
    return gists.filter(g =>
        g.files && Object.keys(g.files).map(k => g.files[k]).some(f => isMarkDownFileObject(f)));
}

function gistEntry(gist) {
    let description = gist.description;
    if (!description) {
        if (gist.files) {
            description = Object.keys(gist.files)[0];
        }
    }
    return (<h2>{description} - <Moment fromNow>{gist.updated_at}</Moment></h2>);
}

export default function Gists() {
    const [gists, setGists] = useState([]);

    useEffect(() => {
        async function loadGists() {
            const result = await fetch('https://api.github.com/users/robvanderleek/gists');
            const json = await result.json();
            const gistsWithMarkdownFiles = filterMarkdownGists(json);
            setGists(gistsWithMarkdownFiles);
        }

        loadGists();
    }, []);

    return (<div style={{marginTop: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        {gists && gists.map((g, i) => <a key={i} target="_blank"
                                         rel="noopener noreferrer"
                                         href={`https://gist.io/@robvanderleek/${g.id}`}>{gistEntry(g)}</a>)}
    </div>);
}