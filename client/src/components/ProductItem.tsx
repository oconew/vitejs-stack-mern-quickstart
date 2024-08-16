import '../styles/Menu.css'

export default function ProductItem(props: {
  type: string
  title: string
  description: string
  img_path: string
}) {
  return (
    <>
      <div className={'product ' + props.type}>
        <div className="product-details">
          <h3 className="product-name">{props.title}</h3>

          <p className="product-description">{props.description}</p>
        </div>

        <div className="product-item">
          <img src={props.img_path} />
        </div>
      </div>
    </>
  )
}
