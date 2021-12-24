
import PickRandom from "./PickRandom";
import PixiJSDiv from "./pixiJs"
import getobjPixjSprite from "./getobjPixjSprite"



export default function showToPickPerson(
    DataShowToPick, SET_DataShowToPick, StatusShowToPick, SET_StatusShowToPick,
    ArrOfPeopeAppear_ReactData, AddTo_Show_ArrOfPeopeAppear_ReactData,
    Total
) {
    try {
        return (
            <>
                <div
                    id="idShowToPickPerson"
                    style={{
                        position: "fixed", top: "1px", bottom: "1px", right: "1px", padding: "5%",
                        left: "1px", backgroundColor: "white", overflow: "auto", textAlign: "center", zIndex: 4,
                        border: "5px solid blue", borderRadius: '5px'
                    }}>
                    <PixiJSDiv />
                    <div style={{ display: "none" }}>
                        <p id="numberData" />
                        <button id="btnUpdateDataShowToPick" onClick={() => {
                            AddTo_Show_ArrOfPeopeAppear_ReactData(
                                parseInt($("#numberData").text())
                            )
                            SET_StatusShowToPick(false)
                            updateDataShowToPick(
                                DataShowToPick,
                                SET_DataShowToPick,
                                parseInt($("#numberData").text()),
                                ArrOfPeopeAppear_ReactData
                            )
                            Total.stObj.inputSumit = ""
                        }}
                        ></button>
                    </div>
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

            </>
        )
    } catch (error) {
        console.log(error)
        return null
    }
}



function updateDataShowToPick(
    DataShowToPick,
    SET_DataShowToPick,
    index,
    ArrOfPeopeAppear_ReactData
) {
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
    let Arr3 = [3, 3]
    let lengthOfNow = ArrNew.length
    try {
        if (lengthOfNow === 0) {
            PickRandom([Arr1, Arr2, Arr3]).forEach((e, i) => {
                ArrNew.push(numI + i + 1)
            })
        }

        if (lengthOfNow === 1) {
            PickRandom([Arr1, Arr2]).forEach((e, i) => {
                ArrNew.push(numI + i + 1)
            })
        }
        getobjPixjSprite(ArrNew, ArrOfPeopeAppear_ReactData)
        SET_DataShowToPick(ArrNew)

    } catch (error) {
        console.log(error)
    }

}


