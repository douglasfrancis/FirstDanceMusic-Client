import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import "./ServiceEditor.scss";
import ErrorMsg from '../misc/ErrorMsg';
import domain from '../../util/domain';

export default function ServiceEditor({ getProfiles, setProfileEditorOpen, editServiceData, clearEditServiceData }) {
    const [editorName, setEditorName] = useState("");
    const [editorLocation, setEditorLocation] = useState("");
    const [editorService, setEditorService] = useState("");
    const [editorPrice, setEditorPrice] = useState("");
    const [editorLink, setEditorLink] = useState("");
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(()=>{
        if(editServiceData) {
            setEditorName(editServiceData.name ?editServiceData.name : "" );
            setEditorLocation(editServiceData.location ?editServiceData.location : "" );
            setEditorService(editServiceData.service ?editServiceData.service : "" );
            setEditorPrice(editServiceData.price ?editServiceData.price : "" );
            setEditorLink(editServiceData.link ?editServiceData.link : "" );
        }
    }, [editServiceData]);

    async function saveProfile(e){
        e.preventDefault();

        const serviceData = {
            name: editorName ? editorName : undefined,
            location: editorLocation ? editorLocation : undefined,
            service: editorService ? editorService : undefined,
            price: editorPrice ? editorPrice : undefined,
            link: editorLink ? editorLink : undefined
        };

        try{
        if(!editServiceData)
            await Axios.post(`${domain}/service/`, serviceData);
        else
            await Axios.put(`${domain}/service/${editServiceData._id}`, serviceData);
        } catch (err) {
            if(err.response) {
                if(err.response.data.msg){
                    setErrorMsg(err.response.data.msg);
                }
            }
            return;
        }

        closeEditor();
        getProfiles();
    };

    function closeEditor(){
        setProfileEditorOpen(false);
        setEditorName("");
        setEditorLocation("");
        setEditorService("");
        setEditorPrice("");
        setEditorLink("");
        clearEditServiceData();
    };

    return (
        <div className="service-editor">
            {
                errorMsg && <ErrorMsg message={errorMsg} clear={() => setErrorMsg(null)}/>
            }
        <form onSubmit={saveProfile} className="form">
            <label htmlFor="name">Artist Name</label>
            <input id="name" type="text" value={editorName} onChange={(e)=>{setEditorName(e.target.value)}}/>

            <label htmlFor="location">Location</label>
            <select id="location" name="location" value={editorLocation} onChange={(e)=>{setEditorLocation(e.target.value)}}>
                <option >--select--</option>
                <option value="North West">North West</option>
                <option value="North East">North East</option>
                <option value="South West">South West</option>
                <option value="South East">South East</option>
                <option value="West Midlands">West Midlands</option>
                <option value="East Midlands">East Midlands</option>
                <option value="London">London</option>
                <option value="East of England">East of England</option>
                <option value="Yorkshire and the Humber">Yorkshire and the Humber</option>
                
            </select>

            <label htmlFor="service">Service</label>
            <select id="service" name="service" value={editorService} onChange={(e)=>{setEditorService(e.target.value)}}>
                <option >--select--</option>
                <option value="Aisle Walk">Aisle Walk</option>
                <option value="Band">Band</option>
                <option value="DJ">DJ (Sax)</option>
                <option value="Drinks Reception">Drinks Reception</option>
                <option value="First Dance">First Dance</option>
                <option value="Instrumental">Instrumental</option>
                <option value="Wandering">Wandering Musicians</option>
            </select>

            <label htmlFor="price">Price per 45 min set/fixed price for Aisle Walk or First Dance</label>
            <input id="price" type="number" value={editorPrice} onChange={(e)=>{setEditorPrice(e.target.value)}}/>

            <label htmlFor="link">Video Link (must be in the format "https://www.youtube.com/embed/1hajd73jds")</label>
            <input id="link" type="text" value={editorLink} onChange={(e)=>{setEditorLink(e.target.value)}}/>


            <button className="btn-save" type="submit">Save</button>
            <button className="btn-cancel" type="button" onClick={closeEditor}>Cancel</button>
        </form>
    </div>
    )
};
