from PIL import Image
import imagehash


def generate_mocked_hash(image_file):
    
    mocked_hash = imagehash.average_hash(Image.open(image_file))

    return mocked_hash