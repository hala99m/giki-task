import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, Button } from "@chakra-ui/react"

const SuccessDialog = ({ isOpen, onClose }) => {
  return (
    <AlertDialog
      motionPreset='slideInBottom'
      isOpen={isOpen}
      isCentered>
      <AlertDialogContent>
        <AlertDialogHeader>Submitted successfully</AlertDialogHeader>
        <AlertDialogBody>
          Thank you for your time. wish you a nice day... 🚀
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button style={{ background: '#ff8c1e', color: '#fff' }} onClick={onClose}>
            Done
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default SuccessDialog