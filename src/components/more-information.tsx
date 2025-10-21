

export const MoreInformation = () => {
  return (
    <div className="my-40 md:flex md:items-center md:gap-4 max-w-[920px] mx-auto">

      <img className="mb-12 md:h-[380px]" src="/images/illustration-stay-productive.png"
        alt="illustration stay productive"
      />
      <div>
        <h2 className="font-bold mb-4">stay productive, wherever you are</h2>

        <p className="text-sm mb-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
         totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
         architecto beatae vitae dicta sunt explicabo
        </p>

        <p className="text-sm mb-4"> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
         sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt
        </p>

        <a href="#" className="text-Teal-200 flex items-center gap-2">
            <p>see how flyo works</p>
            <img src="/images/icon-arrow.svg" alt="icon arrow"></img>
        </a>
      </div>
    </div>
  )
}
