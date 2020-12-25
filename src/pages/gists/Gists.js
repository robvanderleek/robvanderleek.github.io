import React, {useEffect, useState} from "react";
import Moment from 'react-moment';
import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@material-ui/core";
import {Subject} from "@material-ui/icons";

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
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar>
                    <Subject/>
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={description} secondary={<Moment fromNow>{gist.updated_at}</Moment>}/>
        </ListItem>
    );
}

export default function Gists() {
    const [gists, setGists] = useState([]);

    useEffect(() => {
        async function loadGists() {
            const result = await fetch('https://api.github.com/users/robvanderleek/gists');
            const json = await result.json();
            const gistsWithMarkdownFiles = filterMarkdownGists(json);
            gistsWithMarkdownFiles.sort((a, b) => b.updated_at.localeCompare(a.updated_at));
            setGists(gistsWithMarkdownFiles);
        }

        loadGists();
    }, []);

    return (<div style={{marginTop: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <List>
            {gists && gists.map((g, i) => <a key={i} target="_blank"
                                             rel="noopener noreferrer"
                                             href={`https://gist.io/@robvanderleek/${g.id}`}>{gistEntry(g)}</a>)}
        </List>
    </div>);
}