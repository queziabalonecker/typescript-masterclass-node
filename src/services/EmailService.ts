interface ImailTo {
  name: string;
  email: string;
}
interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[];
}
interface MessageDTO {
  to: ImailTo;
  message: IMailMessage;
}
class EmailService {
  sendMail({ to, message }: MessageDTO) {
    console.log(`Email enviado a ${to.name}: ${message.subject}`);
  }
}

export default EmailService;
