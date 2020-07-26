import React from 'react'
import {Dropdown, Form, SplitButton} from 'react-bootstrap'

const Filter = () => {
    return (
        <div>
            {/* Type */}
            <Dropdown>
                <Dropdown.Toggle 
                    variant="secondary" 
                    id="dropdown-basic"
                    title="Type"
                    size="sm"
                    block
                >
                TYPE
                </Dropdown.Toggle>

            <Dropdown.Menu>
                <Form>
                {['Car', 'Bike', 'Boat', 'Hovercraft', 'Airplane', 'Helicopter'].map((type) =>(
                    <div key={'default-checkbox'} className="mb-0 ml-2">
                    <Form.Check 
                        label={type.toUpperCase()} 
                        type={'checkbox'} 
                        id={`${type}`} 
                        placeholder={type.toUpperCase()}
                    />
                    </div>
                ))}
                </Form>
            </Dropdown.Menu>
            </Dropdown>

            {/* Discipline */}
            <Dropdown>
                <Dropdown.Toggle 
                    variant="secondary" 
                    id="dropdown-basic"
                    title="Discipline"
                    size="sm"
                    block
                >
                DISCIPLINE
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Form>
                {
                    [
                    'Street Race', 'Drift', 'Drag Race', 'Hyper Car', 
                    'Rally Raid', 'Motocross', 'Rally Cross', 'Hovercraft', 
                    'Aerobatics', 'Demolition Derby', 'Jetsprint', 'Monster Truck', 
                    'Powerboat', 'Touring Car', 'Air Race', 'Alpha Grand Prix'
                    ].map((type) =>(
                    <div key={'default-checkbox'} className="mb-0 ml-2">
                    <Form.Check 
                        label={type.toUpperCase()} 
                        type={'checkbox'} 
                        id={`${type}`} 
                        placeholder={type.toUpperCase()}
                    />
                    </div>
                ))}
                </Form>
            </Dropdown.Menu>
            </Dropdown>

            {/* Country */}
            <Dropdown>
                <Dropdown.Toggle 
                    variant="secondary" 
                    id="dropdown-basic"
                    size="sm"
                    block
                >
                COUNTRY
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Form>
                {
                    [
                        'Austria', 'France', 'Germany', 'Italy', 
                        'Netherlands', 'South Africa', 'Sweden', 'Switzerland',
                        'Japan', 'UK', 'USA'
                    ].map((type) =>(
                    <div key={'default-checkbox'} className="mb-0 ml-2">
                    <Form.Check 
                        label={type.toUpperCase()} 
                        type={'checkbox'} 
                        id={`${type}`} 
                        placeholder={type.toUpperCase()}
                    />
                    </div>
                ))}
                </Form>
            </Dropdown.Menu>
            </Dropdown>

            {/* Brand */}
            <Dropdown>
                <Dropdown.Toggle 
                    variant="secondary" 
                    id="dropdown-basic"
                    size="sm"
                    block
                >
                BRAND
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Form>
                {
                    [
                        'Abarth', 'Acura', 'Aeroboat',
                        'Alfa Romeo', 'Ariel', 'Aston Martin',
                        'Audi', 'Bentley', 'BMW', 'Bugatti', 
                        'Cadilac', 'Citroen', 'Chevrolet',
                        'Chrysler', 'DCB', 'Dodge', 'Ducati',
                        'Aerobatic Planes', 'Fender', 'Ferrari',
                        'Ford', 'Fraucher', 'Harley-davidson',
                        'Harmon Rocket', 'Honda', 'Hummer', 
                        'ICE Marine', 'Brothers Aircrat', 'Indian',
                        'Jaguar', 'Jeep', 'Kawasaki', 'Koenigsegg', 
                        'KTM', 'Lamborghini', 'Lancia', 'Lotus', 
                        'Maserati', 'Mazda', 'McLaren', 'Mercedes-benz',
                        'Mini', 'Mitsubishi', 'MV Agusta', 'Nissan',
                        'North American', 'Pagani', 'Peugeot', 'Pilatus',
                        'Plymouth', 'Porsche', 'Proto', 'Red Bull', 'RUF',
                        'Saleen', 'Slick Aircraft', 'Spyker', 'Supermarine',
                        'Suzuki', 'TVR', 'Vector', 'Volkswagen', 
                        'Waco Aircraft Corp.', 'Zivko'
                    ].map((type) =>(
                    <div key={'default-checkbox'} className="mb-0 ml-2">
                    <Form.Check 
                        label={type.toUpperCase()} 
                        type={'checkbox'} 
                        id={`${type}`} 
                        placeholder={type.toUpperCase()}
                    />
                    </div>
                ))}
                </Form>
            </Dropdown.Menu>
            </Dropdown>

            {/* Period */}
            <Dropdown>
                <Dropdown.Toggle 
                    variant="secondary" 
                    id="dropdown-basic"
                    size="sm"
                    block
                >
                PERIOD
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Form>
                {['Classic', 'Modern'].map((type) =>(
                    <div key={'default-checkbox'} className="mb-0 ml-2">
                    <Form.Check 
                        label={type.toUpperCase()} 
                        type={'checkbox'} 
                        id={`${type}`} 
                        placeholder={type.toUpperCase()}
                    />
                    </div>
                ))}
                </Form>
            </Dropdown.Menu>
            </Dropdown>

            {/* Style */}
            <Dropdown>
                <Dropdown.Toggle 
                    variant="secondary" 
                    id="dropdown-basic"
                    size="sm"
                    block
                >
                STYLE
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Form>
                {
                    [
                        'Hot Hatch', 'Sports', 'Grand Tourer', 'Supercar',
                        'Muscle', 'Utility'
                    ].map((type) =>(
                    <div key={'default-checkbox'} className="mb-0 ml-2">
                    <Form.Check 
                        label={type.toUpperCase()} 
                        type={'checkbox'} 
                        id={`${type}`} 
                        placeholder={type.toUpperCase()}
                    />
                    </div>
                ))}
                </Form>
            </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Filter