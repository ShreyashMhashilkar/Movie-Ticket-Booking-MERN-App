import { useContext, useEffect } from "react";
import { seatData } from "../Seat";
// import { MovieContext } from "../context/BookingContext";
import { TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Container, Box, Typography, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { add } from '../redux/orderSlice';



const BookTicket = () => {
    const dispatch = useDispatch();
    const { bookItem } = useSelector((state) => state.book)
    console.log(bookItem)
    let isLogin = useSelector((state) => state.isLogin);
    isLogin = isLogin || localStorage.getItem("userId");
    // const id = localStorage.getItem("userId");
    const navigate = useNavigate();
    const [checkedList, setCheckedList] = useState([]);
    const [total,setTotal] = useState(0);


    
    // console.log(typeof final)
    const confirmBooking = (item) => {
        // let final = [bookItem,checkedList,total]
        const set_total = {"seat":checkedList,"total":total}
        let final = {...bookItem,...set_total}
        console.log(final)
        dispatch(add(final))
        // navigate('/')
        if (isLogin) {
            navigate('/payment')
        }
        else {
            navigate('/login')
        }

    }


    const handleSelect = (event) => {
        // console.log(event)
        // console.log(checkedList);
        const value = event.target.value;
        const isChecked = event.target.checked;
        // console.log(value,isChecked)

        if (isChecked) {
            //Add checked item into checkList
            setCheckedList([...checkedList, value]);
            // console.log(checkedList)


        } else {
            //Remove unchecked item from checkList
            const filteredList = checkedList.filter((item) => item !== value);
            setCheckedList(filteredList);
        }
        // let data = [movieData,checkedList]
        // setFinalData([...finalData,data])
        // console.log(checkedList)
        // console.log(setFinalData);
    };
    console.log(checkedList)

    const totalAmount = () => {
        let totalAmount = 0
        for (let item of checkedList) {
            for (let data of seatData) {
                if (Object.values(data).includes(item)) {
                    totalAmount += Number(data['price'])
                }
            }
        }
        return totalAmount;
        
    };
    useEffect(()=>{
        setTotal(totalAmount());
    },[checkedList])
    console.log(totalAmount())


    return (
        <>
            <Container>
                <Typography gutterBottom variant="h4" component="div" color="white" mt={2}>
                    MOVIE - {bookItem[0].name}
                </Typography>
                <Typography gutterBottom variant="h6" component="div" color="white" mt={2}>
                    Starring - {bookItem[0].starring}
                </Typography>
                <TableContainer className="table-class">
                    <Table style={{ width: 10 }} color="white">
                        <TableHead >
                            <TableCell ></TableCell>
                            <TableCell className='white-color'>1</TableCell>
                            <TableCell className='white-color'>2</TableCell>
                            <TableCell>3</TableCell>
                            <TableCell>4</TableCell>
                            <TableCell></TableCell>
                            <TableCell>5</TableCell>
                            <TableCell>6</TableCell>
                            <TableCell>7</TableCell>
                            <TableCell>8</TableCell>
                            <TableCell>9</TableCell>
                            <TableCell>10</TableCell>
                            <TableCell>11</TableCell>
                            <TableCell>12</TableCell>
                            <TableCell>13</TableCell>
                            <TableCell>14</TableCell>
                            <TableCell>15</TableCell>
                            <TableCell>16</TableCell>
                            <TableCell></TableCell>
                            <TableCell>17</TableCell>
                            <TableCell>18</TableCell>
                            <TableCell>19</TableCell>
                            <TableCell>20</TableCell>
                        </TableHead>
                        <TableBody >

                            {seatData.map(item => (
                                <TableRow sx={{ "& td": { border: 0 } }} key={item.id}>
                                    <TableCell >{item.section}</TableCell>
                                    <TableCell ><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat1}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell ><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat2}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat3}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell ><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat4}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell ><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat5}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell ><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat6}
                                        onChange={handleSelect}
                                    />
                                    </TableCell>
                                    <TableCell ><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat7}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat8}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat9}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat10}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell ><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat11}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell ><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat12}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat13}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell ><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat14}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell ><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat15}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat16}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell ><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat17}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat18}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat19}
                                        onChange={handleSelect}
                                    /></TableCell>
                                    <TableCell><input
                                        type="checkbox"
                                        name="languages"
                                        value={item.seat20}
                                        onChange={handleSelect}
                                    /></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>

                    </Table>
                </TableContainer>
            </Container>

            <Divider />
            <Box textAlign='center' mt={1} >
                <Typography gutterBottom variant="p" component="div" color="white" mt={2} >
                    MOVIE SCREEN - ALL EYES THIS WAY PLEASE!!

                </Typography>

            </Box>

            <Box textAlign='center' mt={3} mb={6} >
                <Button
                onClick={() => confirmBooking()}
                    sx={{
                        color: 'white', backgroundImage: 'linear-gradient(to right top, #5c10f2, #6c0fd6, #7214bc, #731ca4, #70238d)', width: 300, ':hover': {
                            bgcolor: 'yellow',
                            color: 'white',
                        }
                    }}
                >PAY

                </Button>
            </Box>

        </>
    )
}


export default BookTicket