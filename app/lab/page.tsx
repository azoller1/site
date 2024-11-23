import Image from 'next/image'
import labpic from './lab.png'

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Lab</h1>
        <p>A rough overview/sketch of my homelab and its servers with cloud servers that are relevant. Setting
          up everything is enjoyable and has allowed me to learn many new technologies and how to setup network infrastructure
          (Always room for improvement, certainly not setup for prod ;).
        </p>
      <br />
      <Image
      src={labpic}
      //width={900}
      //height={900}
      alt="Homelab network/picture"
      />
    </section>
  )
}
