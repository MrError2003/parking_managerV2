import React from 'react'
import Image from 'next/image'

export default function Avatar({ url, email }) {
    return (
        <>
            <div class="grid justify-items-end">
                <h1>{email}</h1>
                {/* Hello world */}
                <Image
                    className="object-cover w-10 h-10 rounded-full"
                    src={url}
                    alt=""
                    width={50}
                    height={50}
                />
            </div>
        </>
    )
}
