import {
  Html,
  Head,
  Font,
  Preview,
  Heading,
  Row,
  Section,
  Text,
  Button,
} from "@react-email/components";

interface VerificationEmailProps {
  username: string;
  otp: string;
}

export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <title>Verification Code</title>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
      </Head>
      <Preview>Here&apos;s your verification code ${otp}</Preview>
      <Section>
        <Row>
          <Heading as="h2">Hey there {username},</Heading>
          <Text>
            Thank you for registering. Please use the following verification
            code to complete your registration.
          </Text>
        </Row>
        <Row>
          <Text>{otp}</Text>
        </Row>
        <Row>
          <Text>
            If you did not request this code, please ignore this email.
          </Text>
        </Row>
        {/* <Row>
            <Button
                href={`http://localhost:3000/${username}`}
                style={{ color: "#61dafb" }}
            >
                Verify here
            </Button>
            </Row> */}
      </Section>
    </Html>
  );
}
