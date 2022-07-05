function Triangle(props) {
    
    const className = props.className ?? '';
    const width = props?.width ?? '62';
    const height = props?.height ?? '62';

    return (
        <svg
        className={className}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M61.4282 0.809397L45.0657 61.8751L0.362482 17.1719L61.4282 0.809397Z" fill="#62BCC2"/>
        </svg>
    );
}
export default Triangle;

