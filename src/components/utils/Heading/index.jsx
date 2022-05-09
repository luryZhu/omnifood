const Heading = (props) => {
    return (
        <div className={props.noPadding ? "" : 'container'}>
            <span className='subheading'>{props.sub}</span>
            <h2 className='heading-secondary'>{props.main}</h2>
        </div>
    )
}

export default Heading