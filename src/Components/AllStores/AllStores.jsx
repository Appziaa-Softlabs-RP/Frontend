import 'bootstrap/dist/css/bootstrap.min.css';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { enviroment } from "../../enviroment";
import ApiService from "../../services/ApiService";

export const AllStores = () => {

    const [storeData, setStoreData] = useState([]);
    const [activeLocation, setActiveLocation] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleLocationChange = (city_id) => {
        const newLocation = storeData.find(loc => loc.city_id === city_id);
        if (newLocation) setActiveLocation(newLocation);
    };

    useEffect(() => {
        const payload = {
            company_id: parseInt(enviroment.COMPANY_ID),
        };
        setLoading(true);
        ApiService.getAllStores(payload)
            .then((res) => {
                if (res.payload.length === 0) return;
                const removeDuplicateCityId = res.payload.filter((v, i, a) => a.findIndex(t => (t.city_id === v.city_id)) === i);
                setStoreData(removeDuplicateCityId);
                // remove duplicate city_id
                setActiveLocation(res.payload[0]);
            })
            .catch((err) => { })
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <div>Loading...</div>;

    if(storeData.length === 0) return null;

    return (
        <div style={{
            background: 'rgb(242, 242, 242)'
        }}
            className='border-section'
        >
            <div style={{
                padding: '2rem',
                maxWidth: '1000px',
            }} className='mx-auto'>
                <Container fluid style={{ fontFamily: 'Arial, sans-serif' }} className='container'>
                <Row>
                        <Col>
                            <Nav
                                className="justify-content-center"
                                // activeKey={activeLocation.city_id}
                                onSelect={(selectedKey) => handleLocationChange(selectedKey)}
                            >
                                {storeData.map((loc, index) => (
                                    <Nav.Item key={index}>
                                        <Nav.Link
                                            eventKey={loc.city_id}
                                            style={{
                                                borderBottom: loc.city_id === activeLocation.city_id ? '2px solid #000' : 'none',
                                                padding: '0.5rem',
                                                margin: '1rem'
                                            }}
                                        >
                                            <p  style={{
                                                color: '#000',
                                                fontSize: '15px',
                                                margin: 0,
                                                padding: 0
                                            }}>{loc.city_id}</p>
                                        </Nav.Link>
                                    </Nav.Item>
                                ))}
                            </Nav>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} style={{ padding: 0 }}>
                            <img src={activeLocation?.photo} alt="Location" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Col>
                        <Col md={6} style={{ backgroundColor: '#fff', padding: '2rem', paddingTop: '6rem' }}>
                            <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '15px', height: "300px" }}>
                                <h6 className='subTitleLarge fw-bold text-start' style={{ color: '#666' }}>{activeLocation?.city_id}</h6>
                                <p>{activeLocation?.address}</p>
                                <p>Call Us:&nbsp;
                                    <a href={`tel:${activeLocation?.contact}`} style={{ color: '#a1a1a1', textDecoration: 'underline' }}>
                                        <span className='text-black fs-6'>{activeLocation?.contact}</span>
                                    </a>
                                </p>
                                <p>Email: &nbsp;
                                    <a href={`mailto:${activeLocation?.email}`} style={{ color: '#a1a1a1', textDecoration: 'underline' }}>
                                    <span className='text-black fs-6'>{activeLocation?.email}</span>
                                    </a>
                                </p>
                                <a href="#" style={{ color: '#a1a1a1', textDecoration: 'underline' }}>
                                    <span className='text-black fs-6'>MAP</span>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};