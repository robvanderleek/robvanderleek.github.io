import React, {useEffect, useState} from "react";
import moment from "moment";
import {Gist} from "../../entities/Gist";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {Subject} from "@mui/icons-material";
import {ItemList} from "../pages.style";

function isMarkDownFileObject(fo: any) {
    return fo.language && fo.language === 'Markdown';
}

function filterMarkdownGists(gists: Array<Gist>) {
    return gists.filter(g =>
        g.files && Object.keys(g.files).map(k => g.files[k]).some(f => isMarkDownFileObject(f)));
}

function gistEntry(gist: Gist) {
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
            <ListItemText primary={description} secondary={moment(gist.updated_at).fromNow()}/>
        </ListItem>
    );
}

export default function Gists() {
    const [gists, setGists] = useState<Array<Gist>>([]);

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

    return (
        <ItemList>
            <List>
                {gists && gists.map((g, i) => <a key={i} target="_blank"
                                                 rel="noopener noreferrer"
                                                 href={`https://gist.io/@robvanderleek/${g.id}`}>{gistEntry(g)}</a>)}
            </List>
        </ItemList>
    );
}