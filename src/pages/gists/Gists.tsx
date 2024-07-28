import React, {useEffect, useState} from "react";
import moment from "moment";
import {Gist} from "../../entities/Gist";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import {Subject} from "@mui/icons-material";
import {ItemList} from "../pages.style";
import {BeatLoader} from "react-spinners";
import {CenteredContent} from "../../App.style";

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
    const [loading, setLoading] = useState(true);
    const [gists, setGists] = useState<Array<Gist>>([]);

    useEffect(() => {
        async function loadGists() {
            const result = await fetch('https://api.github.com/users/robvanderleek/gists');
            const json = await result.json();
            const gistsWithMarkdownFiles = filterMarkdownGists(json);
            gistsWithMarkdownFiles.sort((a, b) => b.updated_at.localeCompare(a.updated_at));
            setGists(gistsWithMarkdownFiles);
            setLoading(false);
        }

        loadGists();
    }, []);

    const renderLoader = () => {
        return (
            <ItemList>
                <BeatLoader color="#FF3355"/>
            </ItemList>
        );
    }

    const renderGists = () => {
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

    if (loading) {
        return <CenteredContent>{renderLoader()}</CenteredContent>;
    } else {
        return renderGists();
    }

}