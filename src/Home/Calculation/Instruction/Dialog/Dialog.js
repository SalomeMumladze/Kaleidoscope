import React from "react";
import Button from "@material-ui/core/Button";
import {
  Dialog,
  Box,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@material-ui/core";
import Text from "Components/Text";
import PriorityHighIcon from "@material-ui/icons/PriorityHigh";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>
        <Text fontSize="25px" fontWeight="600" fontSizeSm="16px">
          გაანგარიშების ინსტრუქცია
        </Text>
        <PriorityHighIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Text fontSize="20px">როგორ მუშაობს ფასების კალეიდოსკოპი</Text>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Text fontWeight="600" color="black" lineHeight="16px">
              ფასების კალეიდოსკოპი წარმოადგენს დიაგრამას, რომელიც ასახავს
              ინფლაციის მაჩვენებელს საქონლისა და მომსახურების ჯგუფების და
              ქვეჯგუფების მიხედვით („დანიშნულების მიხედვით ინდივიდუალური
              მოხმარების კლასიფიკაციის“, COICOP-ის შესაბამისად), ასევე მათ
              წონებს სამომხმარებლო კალათაში.
            </Text>
            <Text margin="20px 0px">
              ფასების კალეიდოსკოპის გამოყენებით შესაძლებელია:
            </Text>
            <ul>
              <li>
                <Text fontWeight="600">
                  საქონლისა და მომსახურების სხვადასხვა ქვეჯგუფზე ფასების
                  ცვლილების მაჩვენებლის შედარება;
                </Text>
              </li>
              <li>
                <Text fontWeight="600">
                  საქონლისა და მომსახურების სხვადასხვა ქვეჯგუფზე ფასების
                  ცვლილების მაჩვენებლის შედარება;
                </Text>
              </li>
            </ul>
            <Box>
              <Text fontWeight="600" color="black" margin="10px 0px">
                გამოყენების ინსტრუქცია
              </Text>
              <Text fontWeight="600" color="black" margin="10px 0px">
                1. აირჩიეთ დროითი პერიოდი
              </Text>
              <Text>
                აირჩიეთ სასურველი წელი და თვე, რა პერიოდისთვისაც გსურთ ინფლაციის
                მაჩვენებლის გაანალიზება.
              </Text>
              <Text fontWeight="600" color="black" margin="10px 0px">
                2. მიუთითეთ საბაზო პერიოდი
              </Text>
              <Text>
                მიუთითეთ ორი საბაზო პერიოდიდან ერთ-ერთი (ინლაციის მაჩვენებელი
                წინა თვესთან ან წინა წლის შესაბამის თვესთან შედარებით).
              </Text>
              <Text fontWeight="600" color="black" margin="10px 0px">
                3. მიღებული შედეგების ინტერპრეტაცია
              </Text>
              <Text lineHeight="16px">
                დიაგრამის თოთოეული სეგმენტი ასახავს საქონლისა და მომსახურების
                კონკრეტული ქვეჯგუფის წონას სამომხმარებლო კალათაში და ამ
                ქვეჯგუფზე ფასების პროცენტულ ცვლილებას მითითებულ საბაზო პერიოდთან
                შედარებით. სეგმენტზე კურსორის მიტანის დროს ჩნდება შესაბამისი
                ქვეჯგუფის შესახებ შემდეგი ინფორმაცია:
              </Text>
              <ul>
                <li>
                  <Text>ქვეჯგუფის დასახელება</Text>
                </li>
                <li>
                  <Text>
                    ქვეჯგუფზე ფასების ცვლილების პროცენტული მაჩვენებელი
                  </Text>
                </li>
                <li>
                  <Text>ქვეჯგუფის წონა სამომხმარებლო კალათაში.</Text>
                </li>
              </ul>
              <Text lineHeight="16px">
                სეგმენტის ფართობი ასახავს შესაბამისი ქვეჯგუფის წონას
                სამომხმარებლო კალათაში. რაც დიდია მოცემული სექტორის ფართობი, მით
                უფრო დიდია შესაბამისი ქვეჯგუფის მნიშნვნელობა ინფლაციის
                მაჩვენებლის ფორმირების პროცესში. სეგმენტების ფერადი ინდიკაცია
                ასახავს შესაბამის ქვეჯგუფზე ფასების ცვლილების ოდენობას,
                დიაგრამის ქვემოთ მოცემული სკალის შესაბამისად.
              </Text>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose}>
            <Text margin="10px">ბეჭვდა</Text>
          </Button>
          <Button variant="outlined" onClick={handleClose} autoFocus>
            <Text margin="10px">დახურვა</Text>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
