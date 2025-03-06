import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

export const useS3 = () => {
  const config = useRuntimeConfig();
  
  const s3Client = new S3Client({
    region: config.public.awsRegion,
    credentials: {
      accessKeyId: config.awsAccessKeyId,
      secretAccessKey: config.awsSecretAccessKey
    }
  });

  const getS3Url = async (key: string) => {
    const command = new GetObjectCommand({
      Bucket: config.public.awsBucket,
      Key: key
    });

    return await getSignedUrl(s3Client, command, { expiresIn: 3600 });
  };

  return {
    getS3Url
  };
};