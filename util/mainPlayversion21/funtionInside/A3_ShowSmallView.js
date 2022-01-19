import Check_ImageOrNot from "./Check_ImageOrNot"

export default function Show_SmallView(Data, Total, SET_Data_phongto) {
    try {
        return <div style={{ maxHeight: "250px", overflow: "auto" }}>
            <div >
                {Data.map((eee, indexeee) =>
                    <div
                        key={indexeee}
                        style={{
                            display: "inline-block",
                            cursor: "pointer",
                            border: "1px solid green",
                            borderRadius: "5px", padding: "5px",
                            backgroundColor: "white",
                            margin: "5px",
                            height: "150px",
                            width: "150px",
                            overflowY: "auto",
                            textAlign: "left"
                        }}>
                        {showInside00(eee, Total, SET_Data_phongto)}
                    </div>
                )}
            </div>

        </div >

    } catch (error) {
        console.log(error)
        return "null"
    }

}

function showInside00(eee, Total, SET_Data_phongto) {
    try {
        if (typeof (eee[0]) === "string") {
            return <>
                <button
                    className="btn btn-sm btn-outline-primary"
                    onClick={() => {
                        SET_Data_phongto(eee)
                    }}
                >Phóng to</button>
                {eee.map((eeee, indexeeee) =>
                    <div
                        key={indexeeee}
                    >
                        {showInside(eeee, Total)}
                    </div>
                )}
            </>
        } else {
            return (
                <>
                    <button
                        className="btn btn-sm btn-outline-primary"
                        onClick={() => {
                            SET_Data_phongto(eee)
                        }}
                    >Phóng to</button>

                    {showTable00(eee)}
                </>
            )
        }

    } catch (error) {
        console.log(error)
        return JSON.stringify(eee)
    }


}

function showTable00(eee) {
    try {
        let arrOfKeys = Object.keys(eee[0])
        return (
            <>
                {arrOfKeys.map((e, i) =>
                    <div key={i}>
                        <b>{e}</b>
                        <hr />
                    </div>

                )}
            </>
        )
    } catch (error) {
        console.log(error)
        return null
    }
}


function showInside(eeee, Total) {
    try {

        if (typeof (eeee) === "string") {
            return <>  {Check_ImageOrNot(eeee) ?
                <img
                    onClick={() => {
                        Total.stObj.inputSumit += "===" + eeee;
                        Total.fnObj.SET_Info_Icon_Reactdata(eeee)
                        Total.fnObj.Submit_Show_OnePeopeAppear_ReactData(Total.stObj.inputSumit)

                    }}
                    src={eeee} width="150px" height={"150px"} style={{ margin: "5px 0px" }} /> :
                <span
                    onClick={() => {
                        Total.stObj.inputSumit += "===" + eeee;
                        Total.fnObj.SET_Info_Icon_Reactdata(eeee)
                        Total.fnObj.Submit_Show_OnePeopeAppear_ReactData(Total.stObj.inputSumit)
                    }}
                >{eeee}</span>
            }
                < br />
            </>
        } else {
            return null
        }
    } catch (error) {
        return JSON.stringify(eeee)
    }
}