import Test from "./test";
export default function BoilingVerdict ({celsius}){
    if (celsius >=100){
        return <div className="alert alert-success"> L'eau bout</div>
    }
    return (
    <div className="alert alert-info">
        <Test/> L'eau bout pas</div>
    )
}