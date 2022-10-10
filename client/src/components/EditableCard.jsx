import React, { useState } from 'react'
import StaticImage from '../assets/static-image.jpg'
import { Card, Button, Form, Row, Col } from 'react-bootstrap'


export default function EditableCard() {
    const [isChange, setIsChange] = useState(false)
    const [cardData, setCardData] = useState({
        name: 'Lakshmi Naga Vamsi Guntupalli',
        desc: "Hello friends, my name is vamsi. I designed this page for se assignment. these page mainly consists of four components. 1.Navbar which is header. 2. Editablecard mainly have myname, description about the project and mypic. 3. News gives about the live news feed. 4. Addnumbers main opeartion is to add 2 numbers. Hope you enjoy my page. "
    })
    const [changeData, setChangeData] = useState(cardData)

    const handleInputChange = ({ target: { name, value } }) => {
        setChangeData({ ...changeData, [name]: value })
    }

    const handleComplete = () => {
        setCardData(changeData)
    }


    const toggleComplete = () => {
        if (isChange) handleComplete()

        setIsChange(prev => !prev)
    }

    return (
        <div className='my-5'>
            <Card>
                <div className='static-card'>
                    <Card.Img src={StaticImage} alt='static image' className='static-image p-1 border' />
                    <Card.Body className='p-2 px-lg-4 py-lg-5'>
                        <Card.Title>{cardData.name}</Card.Title>
                        <Card.Text>{cardData.desc}</Card.Text>
                        <Button onClick={toggleComplete} variant={isChange ? 'success' : 'dark'}>{isChange ? 'Complete' : 'Change info'}</Button>
                    </Card.Body>
                </div>
            </Card>
            {
                isChange ? <Row>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                name='name'
                                onChange={handleInputChange}
                                value={changeData.name}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={6}>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                name='desc'
                                onChange={handleInputChange}
                                value={changeData.desc}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                    : null
            }
        </div>
    )
}
