import React from "react"

 export default function BoilingVerdict ({celsius}){
    if (celsius >=100){
        return <div className="alert alert-success"> L'eau bout</div>
    }
    return <div className="alert alert-info"> L'eau bout pas</div>
}

 class Calculator extends React.Component{

}