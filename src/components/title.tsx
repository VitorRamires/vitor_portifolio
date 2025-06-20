interface TitleText{
  synonim: string,
  title: string
}

export function Title({synonim, title}: TitleText){
  return (
    <div className="title-section">
      <p className="synonim">{synonim}</p>
      <h3 className="title">{title}</h3>
    </div>
  )
}