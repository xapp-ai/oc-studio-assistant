## OC Studio Assistant

XAPPMedia's own virtual assistant project "dogfooding" 📣 stentor conversational framework.

### You need to install serverless

```
yarn global add serverless
```

### Don't forget to set up the AWS profiles in the serverless.yml

```
[dogfoodtest]
aws_access_key_id = AKIAWBLAHBLAH
aws_secret_access_key = ...
```

### Sample .env

```
AWS_REGION=us-east-1

# Get these from the OC Studio
STUDIO_APP_ID=...
STUDIO_TOKEN=...
STUDIO_BASE_URL=https://api.xapp.ai

# If you have API kkeys, etc.
# STUDIO_SECRET_NAME=oc-studio-assistant

USER_STORAGE_TABLE=oc-studio-assistant-user-test
STENTOR_PII_TABLE_NAME=oc-studio-assistant-pii-test

# For Alexa eventually
# OVAI_ALEXA_NO_VERIFY=true
# ALEXA_APPLICATION_ID=amzn1.ask.skill.81e78553-3333-4d6d-8504-9905a1267fff

# LEX V2
LEX_BOT_ID=
LEX_BOT_ALIAS=TSTALIASID
```
