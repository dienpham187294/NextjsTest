
import Check_ImageOrNot from "./Check_ImageOrNot";
import PickRandom from "./PickRandom";
export default function showToPickPerson(
    DataShowToPick, SET_DataShowToPick, StatusShowToPick, SET_StatusShowToPick,
    ArrOfPeopeAppear_ReactData, AddTo_Show_ArrOfPeopeAppear_ReactData,
    Total
) {
    try {

        return (
            <>
                {StatusShowToPick ?
                    <div style={{
                        position: "fixed", top: "1px", bottom: "1px", right: "1px", padding: "5%",
                        left: "1px", backgroundColor: "white", overflow: "auto", textAlign: "center", zIndex: 4,
                        border: "5px solid blue", borderRadius: '5px'
                    }}>
                        {
                            showDivMain(
                                DataShowToPick,
                                updateDataShowToPick,
                                SET_DataShowToPick,

                                AddTo_Show_ArrOfPeopeAppear_ReactData,
                                SET_StatusShowToPick,
                                Total,
                                Show,
                                ArrOfPeopeAppear_ReactData
                            )
                        }
                        <button
                            className="btn btn-outline-danger ml-3"
                            style={{
                                position: "fixed",
                                bottom: "5%",
                                left: "5%"
                            }}
                            onClick={() => {
                                Total.fnObj.SET_PageChange(0)
                                try {
                                    $("#idStopLisening")[0].click()

                                } catch (error) { }
                            }}
                        >Chọn bài</button>
                    </div>
                    :
                    null}
            </>
        )
    } catch (error) {
        console.log(error)
        return null
    }
}
function showDivMain(
    DataShowToPick,
    updateDataShowToPick,
    SET_DataShowToPick,

    AddTo_Show_ArrOfPeopeAppear_ReactData,
    SET_StatusShowToPick,
    Total,
    Show,
    ArrOfPeopeAppear_ReactData
) {

    let Arr = []
    let objOutput = {

    }
    DataShowToPick.forEach(e => {
        try {
            if (!Arr.includes(ArrOfPeopeAppear_ReactData[e].total.viewPick.header)) {
                Arr.push(ArrOfPeopeAppear_ReactData[e].total.viewPick.header)
                objOutput[ArrOfPeopeAppear_ReactData[e].total.viewPick.header] = [e]
            }
            else {
                objOutput[ArrOfPeopeAppear_ReactData[e].total.viewPick.header].push(e)
            }

        } catch (error) {

            try {
                objOutput["none"].push(e)
            } catch (error) {
                Arr.push("none")
                objOutput["none"] = [e]
            }

        }
    })


    return <>
        {Arr.map((ee, ii) =>
            <div
                style={{
                    border: "1px solid black",
                    borderRadius: "10px",
                    width: "100%",
                    margin: "5px"
                }}
                key={ii}>
                <h5>{ee !== "none" ? ee : null}</h5>
                <div>
                    {objOutput[ee].map((e, i) =>
                        <div key={i}
                            style={{ display: "inline-block", margin: "5px", border: "1px solid green", borderRadius: "5px" }}
                            onClick={() => {
                                updateDataShowToPick(DataShowToPick, SET_DataShowToPick, e)
                                AddTo_Show_ArrOfPeopeAppear_ReactData(e)
                                SET_StatusShowToPick(false)
                                Total.stObj.inputSumit = ""
                            }}
                        >
                            {Show(ArrOfPeopeAppear_ReactData[e].total)}
                        </div>
                    )}
                </div>
            </div>
        )}
    </>
}




function updateDataShowToPick(DataShowToPick, SET_DataShowToPick, index) {
    let numI = DataShowToPick[DataShowToPick.length - 1];

    let ArrNew = [];
    DataShowToPick.forEach(e => {
        if (e !== index) {
            ArrNew.push(e)
        }
    })
    let Arr0 = []
    let Arr1 = [1]
    let Arr2 = [2, 2]
    let Arr3 = [3, 3, 3]

    let lengthOfNow = ArrNew.length
    try {
        if (lengthOfNow === 0) {
            PickRandom([Arr1, Arr2, Arr3]).forEach((e, i) => {
                ArrNew.push(numI + i + 1)
            })
        }

        // if (lengthOfNow === 1) {
        //     PickRandom([Arr1, Arr2]).forEach((e, i) => {
        //         ArrNew.push(numI + i + 1)
        //     })
        // }

        SET_DataShowToPick(ArrNew)

    } catch (error) {
        console.log(error)
    }

}

function Show(data) {
    try {
        return <>
            <img src={data.viewPick.img} height="120px" />
        </>
    } catch (error) {
        try {
            if (data.icon !== undefined && data.icon !== "" && data.icon !== null && Check_ImageOrNot(data.icon)) {
                return <img src={data.icon} height="120px" />
            } else {
                return <img src={"https://i.postimg.cc/VNJf7gXX/person.png"} height="120px" />
            }

        } catch (error) {
            return <img src={"https://i.postimg.cc/VNJf7gXX/person.png"} height="120px" />
        }


    }
}