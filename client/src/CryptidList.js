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
            <h1>Hello from Cryptid</h1>
            {cryptids.map((cryptid) => (
                <Cryptid
                    key={cryptid.id}
                    id={cryptid.id}
                    name={cryptid.name}
                    img_url={cryptid.image_url}
                    description={cryptid.description}
                    user={cryptid.user.username}
                />
            ))}
        </>
    )
}

export default CryptidList;