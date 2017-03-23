import { Router } from 'express';
import * as AWSController from '../controllers/aws.controller';

const router = new Router();

router.route('/S3/sign').post(AWSController.signS3);
router.route('/S3/copy').post(AWSController.copyObjectInS3);

export default router;
