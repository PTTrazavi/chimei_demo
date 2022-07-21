FROM ubuntu:20.04
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && apt-get install -y --no-install-recommends \
        build-essential \
        devscripts \
        dh-make \
        fakeroot \
        wget \
        git \
        vim \
        curl \
        pkg-config \
        python3 \
        python3-dev \
        python3-pip \
        python3-setuptools \
        ca-certificates \
        libssl-dev \
        rsync \
        software-properties-common \
        sudo \
        udev \
        zip \
        unzip \
        rar \
        unrar \
        locales \
        htop \
        net-tools \
        nginx
RUN apt-get clean && \
    rm -rf /var/lib/apt/lists/*
RUN locale-gen en_US.UTF-8 && locale-gen zh_TW.UTF-8 && update-locale
WORKDIR /
EXPOSE 80 443
ENTRYPOINT service nginx restart && bash
STOPSIGNAL SIGQUIT
