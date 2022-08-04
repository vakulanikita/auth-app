export class AuthDto {
  email: string;
  password: string;
}

export class ConfirmationDto {
  email: string;
  pinCode: number;
}

export class ResendDto {
  email: string;
}
