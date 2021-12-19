let lastIndexOfPerson;
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
                            DataShowToPick.map((e, i) =>
                                <div key={i}
                                    style={{ display: "inline-block", margin: "5px", border: "1px solid green", borderRadius: "5px" }}
                                    onClick={() => {
                                        updateDataShowToPick(DataShowToPick, SET_DataShowToPick, lastIndexOfPerson, e)
                                        AddTo_Show_ArrOfPeopeAppear_ReactData(e)
                                        SET_StatusShowToPick(false)
                                        Total.stObj.inputSumit = ""
                                    }}
                                >
                                    {ArrOfPeopeAppear_ReactData[e].total.viewPick !== undefined ?
                                        <>
                                            <h5>{ArrOfPeopeAppear_ReactData[e].total.viewPick.header}</h5>
                                            <p>{ArrOfPeopeAppear_ReactData[e].total.viewPick.content}</p>
                                            <img src={ArrOfPeopeAppear_ReactData[e].total.viewPick.img} height="250px" />
                                        </>
                                        :
                                        <img src={ArrOfPeopeAppear_ReactData[e].total.icon} height="250px" />
                                    }


                                </div>
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

function updateDataShowToPick(DataShowToPick, SET_DataShowToPick, lastIndexOfPerson, index) {
    lastIndexOfPerson = DataShowToPick[DataShowToPick.length - 1];

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

    try {
        if (ArrNew.length === 0) {
            let needToAdd = PickRandom([Arr1, Arr2, Arr3]);
            needToAdd.forEach((e, i) => {
                ArrNew.push(lastIndexOfPerson + i)
            })
        }
        if (ArrNew.length === 1) {
            let needToAdd = PickRandom([Arr0, Arr1, Arr2]);
            needToAdd.forEach((e, i) => {
                ArrNew.push(lastIndexOfPerson + i)
            })
        }
        if (ArrNew.length === 0) {
            let needToAdd = PickRandom([Arr0, Arr1]);
            needToAdd.forEach((e, i) => {
                ArrNew.push(lastIndexOfPerson + i)
            })
        }

        SET_DataShowToPick(ArrNew)


    } catch (error) {

    }

}