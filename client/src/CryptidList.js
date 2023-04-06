import { useEffect } from 'react';
import { useState } from 'react';
import Cryptid from './Cryptid';

function CryptidList() {

    const [cryptids, setCryptids] = useState([])

    useEffect(() => {
        fetch("/cryptids")
            .then((r) => r.json())
            .then(setCryptids)
    }, []);


    return (
        <>
            <h2 className='display-3'>Known Cryptids</h2>
            {cryptids.map((cryptid) => (
                <Cryptid
                    key={cryptid.id}
                    id={cryptid.id}
                    name={cryptid.name}
                    img_url={cryptid.image_url}
                    description={cryptid.description}
                    user={cryptid.user.username}
                    locations={cryptid.locations}
                />
            ))}
        </>
    )
}

export default CryptidList;