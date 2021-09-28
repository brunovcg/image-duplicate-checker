# import pymongo


image_await_aproval = []


def set_in_line(object_image):
    image_await_aproval.append(object_image)

def pop_from_line(object_image):
    image_await_aproval.pop(object_image)



# client = pymongo.MongoClient("mongodb://localhost:27018/")
# db = client["hapvida"]

# def get_all():
#     all_images = list(db.duplicateImage.find())

#     if all_images != []:

#         for image in all_images:
#            image.pop("_id")

#     return all_images

# def post_images(files: list):


    

#     db.insertMany[files]


#     return files


