from rest_framework import viewsets

from django.contrib.auth.models import User
from .serializers import CurrentUserSerializer


class CurrentUserSerializer(viewsets.ModelViewSet):

    serializer_class = CurrentUserSerializer
    queryset = User.objects.all()

    def users(self, request, *args, **kwargs):
        queryset = User.objects.all()
        serialazer = CurrentUserSerializer(queryset, many=True)
        return Response(serialazer.data)